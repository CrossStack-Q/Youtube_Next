import React from "react";
import {
  Popover,
  Grid,
  Avatar,
  Row,
  Col,
  Text,
  Spacer,
  Button,
  Input,
  Tooltip
} from "@nextui-org/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { AdjustmentsIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Card } from "./Card";

function HeaderT() {
  const { data: session } = useSession();
  const router = useRouter();

  function UploadPage() {
    router.push("/upload");
  }
  return (
    <div className="flex h-[3rem]">
      <div className="w-[95vw] flex justify-center items-center ">
        <div className="flex w-[95vw]  absolute flex-grow max-w-[40rem]">
          <Input
            placeholder="Search Content"
            fullWidth
            rounded
            status="error"
            css={{ $$inputColor: "#151719" }}
            contentLeft={<SearchOutlinedIcon className="text-white" />}
            contentRight={<KeyboardVoiceOutlinedIcon className="text-white" />}
          />
          <AdjustmentsIcon className="w-7 h-7 m-3" />
        </div>
        <div></div>
        <div className="flex right-0 absolute">
          <div className="flex items-center">
            <DotsVerticalIcon className="w-7 h-7" />
            <Button color="error" auto onClick={UploadPage}>
              Upload
            </Button>
            <WidgetsOutlinedIcon className="w-7 h-7 m-3" />
            <div>
              <Grid.Container gap={2} alignContent="center">
                <Grid >
                  {/* <Popover>
                    <Popover.Trigger>
                      <Button color="error" auto>
                        {!session ? "Sign In" : session?.user?.name}
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content
                      css={{
                        backgroundColor: "#151719",
                      }}
                    >
                      <Card />
                    </Popover.Content>
                  </Popover> */}

                  <Tooltip placement="bottomEnd" css={{backgroundColor:"#1D1F22"}} content={<Card />}>
                    <Button color="error" auto>
                      {!session ? "Sign In" : session?.user?.name}
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid.Container>
            </div>
            {/* <Button color="error" auto>
              {!session ? "Sign In" : session?.user?.name}
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderT;
