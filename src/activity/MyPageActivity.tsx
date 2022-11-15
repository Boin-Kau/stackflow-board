import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";
import { ReactComponent as Setting } from "../assets/icon_setting.svg";

const MyPageActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClickSetting = () => {
    push("SettingActivity", {});
  }

  return (
    <AppScreen
      appBar={{
        title: "마이페이지",
        appendRight: () => <Setting onClick={onClickSetting} />,
      }}
    >
      <div>Home Activity</div>
    </AppScreen>
  );
};

export default MyPageActivity;
