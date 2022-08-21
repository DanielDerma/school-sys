import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
export default function index() {
  return (
    <Box>
      <Toolbar>
        <Link href="/app/account">
          <a>account</a>
        </Link>
      </Toolbar>
    </Box>
  );
}
