import React, { useEffect, useState } from "react";
import RequireAuth from "../auth/RequiredAuth";
import api from "../data/fetchData";
import { useParams } from "react-router-dom";

function JobDetail() {
  const [job, setJob] = useState();
  let { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJob(id);
      setJob(data);
    };
    fetch();
  }, [id]);
  return (
    <div>
      <RequireAuth callback={() => {}}>
        <h1 style={{ color: "white" }}>{job?.title}</h1>
      </RequireAuth>
    </div>
  );
}

export default JobDetail;
