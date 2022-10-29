import React from "react";
import { useGlobalContext } from "../context";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { customStyles } from "../style";

const CompaniesList = () => {
  const { company, isloading } = useGlobalContext();

  if (isloading) {
    return (
      <div className="loading" style={customStyles.loadingDiv}>
        <span style={customStyles.loadingSpan}>Loading...</span>
      </div>
    );
  }

  const arr = ["Name", "Price", "Status"];

  return (
    <>
      <Container sx={customStyles.container}>
        <Typography variant="h3" sx={customStyles.heading}>
          Companies List
        </Typography>
        <TableContainer>
          <Table>
            <TableHead sx={customStyles.tableHeading}>
              <TableRow>
                {arr.map((head) => (
                  <TableCell sx={customStyles.tableHeadingCell}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!isloading &&
                company.companies.map((row) => {
                  return (
                    <TableRow sx={customStyles.tableBodyRow}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell
                        sx={{
                          color:
                            row.status === "active" ? "#000000" : "#7F8487",
                        }}
                      >
                        <FiberManualRecordIcon
                          color={
                            row.status === "active" ? "success" : "disabled"
                          }
                          sx={{ fontSize: 10, pr: 0.5 }}
                        />
                        {row.status}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default CompaniesList;
