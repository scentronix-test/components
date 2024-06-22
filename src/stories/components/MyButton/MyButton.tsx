import { Box, Button, Chip } from "@mui/material";

interface MyButtonProps {
  /**
   * Is primary button
   */
  primary?: boolean;
  /**
   * Start icon
   */
  startIcon?: React.ReactNode;
  /**
   * Button contents
   */
  label: string;
  /**
   * Button description
   */
  description?: string;
  /**
   * Price
   */
  price?: number;
  /**
   * Tags
   */
  tags?: string[];
  /**
   * Optional sx prop
   */
  sx?: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MyButton = ({
  primary,
  label,
  description,
  price,
  tags,
  startIcon,
  ...props
}: MyButtonProps) => {
  return (
    <Button type="button" color={primary ? "primary" : "secondary"} {...props}>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          width: "100%",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={"space-between"}
        >
          <Box display="flex" flexDirection="row">
            {startIcon && (
              <Box
                sx={{
                  marginRight: (theme) => theme.spacing(1), // gap between icon and label
                }}
              >
                {startIcon}
              </Box>
            )}
            <Box
              sx={{
                fontWeight: "bold",
              }}
            >
              {label}
            </Box>
          </Box>
          {price && (
            <Box
              sx={{
                marginLeft: (theme) => theme.spacing(1), // gap between label and price
                fontWeight: "bold",
              }}
            >
              €{price}
            </Box>
          )}
        </Box>
        {description && (
          <Box
            sx={{
              textAlign: "left",
              color: (theme) => theme.palette.grey[500],
              marginTop: (theme) => theme.spacing(1), // gap to description
              fontSize: (theme) => theme.spacing(1.5),
            }}
          >
            {description}
          </Box>
        )}
        {(tags || [])?.length > 0 && (
          <Box
            display="flex"
            justifyContent={"flex-start"}
            sx={{
              marginTop: (theme) => theme.spacing(2), // gap to tags
            }}
          >
            {tags?.map((tag, index) => (
              <Box
                key={index}
                sx={{
                  marginRight: (theme) => theme.spacing(1),
                }}
              >
                <Chip
                  color="secondary"
                  label={tag}
                  sx={{
                    height: (theme) => theme.spacing(3),
                    fontSize: (theme) => theme.spacing(1.5),
                    fontWeight: "bold",
                  }}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Button>
  );
};
