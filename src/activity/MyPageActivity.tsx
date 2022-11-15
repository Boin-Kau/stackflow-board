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
      <h1>test 1</h1>
      <h1>test 2</h1>
      <h1>test 3</h1>
      <h1>test 4</h1>
      <h1>test 5</h1>
      <h1>test 6</h1>
      <h1>test 7</h1>
      <h1>test 8</h1>
      <h1>test 9</h1>
      <h1>test 10</h1>
      <h1>test 11</h1>
      <h1>test 12</h1>
      <h1>test 13</h1>
      <h1>test 1</h1>
      <h1>test 2</h1>
      <h1>test 3</h1>
      <h1>test 4</h1>
      <h1>test 5</h1>
      <h1>test 6</h1>
      <h1>test 7</h1>
      <h1>test 8</h1>
      <h1>test 9</h1>
      <h1>test 10</h1>
      <h1>test 11</h1>
      <h1>test 12</h1>
      <h1>test 13</h1>
    </AppScreen>
  );
};

export default MyPageActivity;
