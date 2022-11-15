import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

const SettingActivity: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={{
        title: "설정",
      }}
    >
      <div>Setting Activity</div>
    </AppScreen>
  );
};

export default SettingActivity;