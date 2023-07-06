import React from "react";
import { useState, useEffect, useRef } from "react";
import PostedMain from "./PostedMain";
import styles from "../../../styles/UploadVid.module.css";
import { getProviders, signOut } from "next-auth/react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Grid, Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";

function MainQ() {
  const { data: session } = useSession();

  const [Posetg, setVideos] = useState([]);

  useEffect(() => {
    return onSnapshot(
      // query(collection(db, "youtubeq",`${session?.user?.email}`,`${session?.user?.email}`), orderBy("timestamp", "desc")),
      query(collection(db, "youtubeall"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setVideos(snapshot.docs);
      }
    );
  }, [db]);


  










  return (
    <div className={styles.feed}>
      <Grid.Container gap={1} justify="center">
        {Posetg.map((Posetg) => (
          <PostedMain
            key={Posetg.data().username}
            video={Posetg.data().video}
            // image={Posetg.data().thumbnail}
            title={Posetg.data().title}
          />
        ))}
      </Grid.Container>
    </div>
  );
}

export default MainQ;
