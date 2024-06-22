import React, { useCallback } from "react";
import {
  Backdrop,
  Box,
  Button,
  ClickAwayListener,
  Grow,
  IconButton,
  Popper,
} from "@mui/material";
import {
  AddShoppingCart as AddShoppingCartIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { MyButton } from "../MyButton/MyButton";
import { Product } from "@/types/Product";

interface MenuProps {
  /**
   * Menu contents
   */
  label: string;
  /**
   * Products added
   */
  products: Product[];
  /**
   * Placement
   */
  placement?: "top" | "bottom" | "middle";
  /**
   * Optional click handler
   */
  handleClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MyMenu = ({ label, products, placement, ...props }: MenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(document.getElementById("basic-button"));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getTopPosition = useCallback(() => {
    switch (placement) {
      case "top":
        return "10px";
      case "bottom":
        return "auto";
      case "middle":
        return "50%";
      default:
        return "auto";
    }
  }, [placement]);
  const getBottomPosition = useCallback(() => {
    switch (placement) {
      case "bottom":
        return "10px";
      case "top":
        return "auto";
      default:
        return "auto";
    }
  }, [placement]);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.modal }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
      <Box
        id="basic-button"
        sx={{
          position: "absolute",
          right: "10px",
          top: getTopPosition(),
          bottom: getBottomPosition(),
        }}
      >
        {open ? (
          <IconButton
            aria-label="close"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded="true"
            color="secondary"
            onClick={handleClick}
            sx={{
              zIndex: (theme) => theme.zIndex.modal,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : (
          <Button
            aria-haspopup="true"
            onClick={handleClick}
            startIcon={<AddShoppingCartIcon />}
            {...props}
          >
            {label}
          </Button>
        )}
      </Box>
      <Popper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        placement={placement === "middle" ? "left" : "left-start"}
        transition
        disablePortal
        sx={{
          zIndex: (theme) => theme.zIndex.modal,
          marginRight: (theme) => theme.spacing(2) + "!important",
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Box>
              <ClickAwayListener onClickAway={handleClose}>
                <Box
                  id="composition-menu"
                  display={"flex"}
                  flexDirection={"column"}
                  aria-labelledby="composition-button"
                  gap={1}
                >
                  {products.map((product, index) => (
                    <MyButton
                      key={index}
                      primary={false}
                      label={product.name}
                      description={product.description}
                      price={product.price}
                      tags={product.tags}
                      startIcon={<AddShoppingCartIcon fontSize="small" />}
                      sx={{
                        minWidth: "200px",
                      }}
                      onClick={handleClose}
                    />
                  ))}
                </Box>
              </ClickAwayListener>
            </Box>
          </Grow>
        )}
      </Popper>
    </>
  );
};
