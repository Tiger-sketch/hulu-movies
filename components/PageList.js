import React from "react";

import { Pagination } from "@material-ui/lab";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/dist/client/router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
function PageList({ data }) {
  const router = useRouter();
  const classes = useStyles();
  //   const [count, setCount] = useState(data);
  const [page, setPage] = useState(1);
  const handelChange = (event, value) => {
    setPage(value);
    router.push(`/?genre=${router.query.genre}&page=${page}`);
  };

  return (
    <div className="mx-auto text-white">
      <Pagination
        className="text-white"
        count={data}
        page={page}
        variant="outlined"
        onChange={handelChange}
      />
    </div>
  );
}

export default PageList;
