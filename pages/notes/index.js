import React from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, ButtonGroup } from "@material-ui/core";
import Layout from '../../components/layout'


const myLinks = [
    {
      as: "/",
      href: "/",
      name: "Home",
    },
    {
      as: "/notes",
      href: "/notes",
      name: "Notes Landing",
    },
    {
      as: "/notes/1",
      href: "/notes/1",
      name: "Note-1",
    },
    {
      as: "/notes/2",
      href: "/notes/2",
      name: "Note-2",
    },
    {
      as: "/about",
      href: "/about",
      name: "About us",
    },
  ];

const Notes = () => {
  return (
    <Layout title="Notes">
      <Typography variant="h1">Notes landing</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {myLinks.map((l, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="left">
                    <Link as={l.as} href={l.href}>
                      <a>{l.name}</a>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <Button variant="contained" color="primary">Click me</Button>
                      <Button variant="contained">Click me</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Layout>
  );
};

export default Notes;
