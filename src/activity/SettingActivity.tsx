import { ActivityComponentType, useStack } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useEffect } from "react";

const SettingActivity: ActivityComponentType = () => {
  const stack = useStack();

  useEffect(() => {
    console.log("현재 쌓여진 액티비티들:", stack.activities);
    console.log("전체 전환 상태:", stack.globalTransitionState);
    console.log(
      "초기에 설정된 Transition Duration 옵션",
      stack.transitionDuration
    );
  }, [stack]);

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