import React, { useState, useRef } from "react";
import { Button, Input } from "@nextui-org/react";
import {
  Card,
  Grid,
  Radio,
  Text,
  Link,
  Textarea,
  Progress,
  Checkbox,
} from "@nextui-org/react";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function MainUp() {
  const router = useRouter();
  const { data: session } = useSession();
  const filePickerRef = useRef(null);
  const filePickerRefImage = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileImage, setSelectedFileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingthumbnail, setLoadingthumbnail] = useState(false);
  const [loadingq, setLoadingq] = useState(false);
  const [visible, setVisible] = useState(true);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [title, setTitle] = useState("Title of Video");
  const [titleq, setTitleq] = useState("");
  const [documnet_id, setDocument_id] = useState("");
  const [documnet_idall, setDocument_idall] = useState("");
  const [notDone, setNotDone] = useState(true);

  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    // Create a post and add data to it.
    // get post ID  of your newlu created value
    //  upload image to firestore with post id
    // get download url and update original post with url.

    const docRef = await addDoc(
      collection(
        db,
        "youtubeq",
        `${session.user.email}`,
        `${session.user.email}`
      ),
      {
        mail: session.user.email,
        username: "Anurag Sharma",
        timestamp: serverTimestamp(),
      }
    );

    const docRefall = await addDoc(collection(db, "youtubeall"), {
      mail: session.user.email,
      timestamp: serverTimestamp(),
    });

    const videoRef = ref(
      storage,
      `youtubeq/${docRef.mail}/${docRef.mail}/${docRef.id}/video`
    );

    const thumbnailRef = ref(
      storage,
      `youtubeq/${docRef.mail}/${docRef.mail}/${docRef.id}/thumbnail`
    );

    await uploadString(videoRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(videoRef);
        await updateDoc(
          doc(
            db,
            "youtubeq",
            `${session.user.email}`,
            `${session.user.email}`,
            docRef.id
          ),
          {
            video: downloadURL,
          }
        );
      }
    );

    await uploadString(thumbnailRef, selectedFileImage, "data_url").then(
      async (snapshot) => {
        const downloadURLthumbnail = await getDownloadURL(thumbnailRef);
        await updateDoc(
          doc(
            db,
            "youtubeq",
            `${session.user.email}`,
            `${session.user.email}`,
            docRef.id
          ),
          {
            thumbnail: downloadURLthumbnail,
          }
        );
      }
    );

    // Try
    await uploadString(videoRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(videoRef);
        await updateDoc(doc(db, "youtubeall", docRefall.id), {
          video: downloadURL,
        });
      }
    );

    await uploadString(thumbnailRef, selectedFileImage, "data_url").then(
      async (snapshot) => {
        const downloadURLthumbnail = await getDownloadURL(thumbnailRef);
        await updateDoc(doc(db, "youtubeall", docRefall.id), {
          thumbnail: downloadURLthumbnail,
        });
      }
    );

    setDocument_id(`${docRef.id}`);
    setDocument_idall(`${docRefall.id}`);
    setLoading(false);
    setLoadingthumbnail(false);
    setSelectedFile(null);
    setSelectedFileImage(null);
    setNotDone(false)
    console.log("Done");
    console.log(documnet_id);
  };

  console.log(documnet_id);

  // Upload file in a very good way by this.
  const PublishQ = async () => {
    if (loading) return;

    await updateDoc(
      doc(
        db,
        "youtubeq",
        `${session.user.email}`,
        `${session.user.email}`,
        documnet_id
      ),
      {
        mail: session.user.email,
        username: "Anurag Sharma",
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        timestamp: serverTimestamp(),
      }
    );

    await updateDoc(doc(db, "youtubeall", documnet_idall), {
      mail: session.user.email,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      timestamp: serverTimestamp(),
    });

    setDocument_id("");
    setLoading(false);
    console.log("Done");
    setTitleq("");

    function VideoPage() {
      router.push("/video");
    }
    VideoPage();
  };

  const addVideoToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFileImage(readerEvent.target.result);
    };
  };

  function setTitleo() {
    setTitle(titleRef.current.value);
  }

  return (
    <div className="relative flex justify-center items-center">
      
      <div className="md:max-w-[49rem] sm:max-w-[31rem] lg:max-w-[61rem] xl:max-w-[66rem] max-w-[24rem]">
        {/* File Upload */}
        {notDone ? (<>
        {!selectedFile && (
          <div className="flex flex-col justify-center items-center p-4 pl-7 pr-7 md:min-w-[48rem] sm:min-w-[30rem] lg:min-w-[60rem] xl:min-w-[64rem] border-dashed border border-gray-600 rounded-3xl mt-8">
            <input
              ref={filePickerRef}
              onChange={addVideoToPost}
              accept="video/mp4,video/x-m4v,video/*"
              type="file"
              hidden
            />
            <p>To upload more drag and drop</p>
            <p>or</p>
            <Button onClick={() => filePickerRef.current.click()}>
              Select file
            </Button>
          </div>
        )}
        {selectedFile && (
          <div className="flex flex-col justify-center items-center p-4 pl-7 pr-7 md:min-w-[48rem] sm:min-w-[30rem] lg:min-w-[60rem] xl:min-w-[64rem] border-dashed border border-gray-600 rounded-3xl mt-8">
            {loading ? (
              <Card>
                <div className="flex items-center justify-center">
                  <Progress
                    indeterminated
                    value={1}
                    shadow
                    color="error"
                    status="error"
                    // css={{ maxWidth: "15rem", marginLeft: "$16" }}
                  />
                </div>
              </Card>
            ) : (
              <div>
                {!selectedFileImage && (
                  <div>
                    <input
                      ref={filePickerRefImage}
                      onChange={addImageToPost}
                      accept="image/*"
                      type="file"
                      hidden
                    />
                    <Button onClick={() => filePickerRefImage.current.click()}>
                      Select thumbnail
                    </Button>
                  </div>
                )}
                {selectedFileImage &&  (
                  <div>
                    {loadingthumbnail ? (
                      <Card>
                      <div className="flex items-center justify-center">
                        <Progress
                          indeterminated
                          value={1}
                          shadow
                          color="success"
                          status="success"
                          // css={{ maxWidth: "15rem", marginLeft: "$16" }}
                        />
                      </div>
                    </Card>
                    ):(
                      <div>
                        <Button auto color="error" onClick={uploadPost}>
                          Upload ok
                        </Button>
                      </div>  
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        </>):(<div>
          <Button auto color="error">
            Now set Title and Description
          </Button>
        </div>)}

        {/* <Card
          className="md:min-w-[48rem] sm:min-w-[30rem] lg:min-w-[60rem] xl:min-w-[64rem]"
          css={{ p: "$6", marginTop: "$6", marginBottom: "$6" }}
        >
          {!selectedFileImage && (
            <div>
              <input
                ref={filePickerRefImage}
                onChange={addImageToPost}
                accept="image/*"
                type="file"
                hidden
              />
              <Button onClick={() => filePickerRefImage.current.click()}>
                Select file
              </Button>
            </div>
          )}
          {selectedFileImage && <div></div>}
        </Card> */}

        <Card
          className="md:min-w-[48rem] sm:min-w-[30rem] lg:min-w-[60rem] xl:min-w-[64rem]"
          css={{ p: "$6", marginTop: "$6", marginBottom: "$6" }}
        >
          Youtube clone by Anurag Sharma ( Cross Rehk )
        </Card>
        <div>
          <Card
            className="md:min-w-[48rem] sm:min-w-[30rem] lg:min-w-[60rem] xl:min-w-[64rem]"
            css={{ p: "$6" }}
          >
            <div>
              <div className="flex items-center">
                <div className="">
                  <p>{title}</p>
                </div>

                {/* <Progress
                  indeterminated
                  value={1}
                  shadow
                  color="error"
                  status="error"
                  css={{ maxWidth: "15rem", marginLeft: "$16" }}
                /> */}
              </div>
            </div>
            <Card.Body>
              <div className="">
                <div className="flex space-x-8 mt-2 mb-1">
                  <p className="text-gray-800 text-sm ">Home</p>
                  <p className="text-gray-800 text-sm ">Home</p>
                  <p className="text-gray-800 text-sm ">Home</p>
                  <p className="text-gray-800 text-sm ">Home</p>
                </div>
                <hr />
              </div>
            </Card.Body>
            <Grid>
              <div className="md:min-w-[48rem] sm:min-w-[30rem] lg:min-w-[60rem] xl:min-w-[64rem]">
                {/* <Textarea
                  fullWidth
                  css={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  placeholder="Title"
                  minRows={1}
                  maxRows={2}
                  value={""}
                  ref={titleRef}
                  onChange={setTitleo()}
                /> */}
                <Input
                  fullWidth
                  color="primary"
                  size="lg"
                  value={setTitleq}
                  ref={titleRef}
                  placeholder="Title"
                  onChange={setTitleo}
                />
                <Textarea
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "$4",
                  }}
                  placeholder="Description"
                  rows={6}
                  ref={descriptionRef}
                />
              </div>
            </Grid>
            <div className="flex items-center justify-between">
              <Radio.Group
                orientation="horizontal"
                defaultValue="primary"
                css={{ marginBottom: "1rem" }}
              >
                <Radio value="p1" color="primary" css={{ marginTop: "1rem" }}>
                  Public
                </Radio>
                <Radio value="p2" color="primary" css={{ marginTop: "1rem" }}>
                  Private
                </Radio>
                <Radio value="p3" color="primary" css={{ marginTop: "1rem" }}>
                  Unlisted
                </Radio>
              </Radio.Group>

              <div className="flex flex-1 max-w-sm ">
                <Input
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="https://m.youtube.com/g4g1dggr7s5ee2d"
                  // ref={titleRef}
                  // onChange={setTitleo}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Radio.Group
                label="Select Category"
                orientation="horizontal"
                color="primary"
                defaultValue={["buenos-aires"]}
                css={{}}
              >
                <Radio value="p1" color="primary" css={{}}>
                  ReactJS
                </Radio>
                <Radio value="p2" color="primary" css={{}}>
                  NextJS
                </Radio>
                <Radio value="p3" color="primary" css={{}}>
                  Data Science
                </Radio>
                <Radio value="p3" color="primary" css={{}}>
                  Android
                </Radio>
                <Radio value="p3" color="primary" css={{}}>
                  Flutter
                </Radio>
              </Radio.Group>
              <div className="mt-4">
                <Button onClick={PublishQ} auto disabled={!documnet_id}>
                  {loadingq ? "Done" : "Publish"}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MainUp;
