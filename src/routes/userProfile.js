import React from 'react';
import { useParams } from "react-router-dom";

const UserProfile = () => {
    let params = useParams();
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Profile ID: {params.profileId}</h2>;
      </main>
    );
  }

export default UserProfile;