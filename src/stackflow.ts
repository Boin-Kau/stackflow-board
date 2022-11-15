import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import MyPageActivity from "./activity/MyPageActivity";
import SettingActivity from "./activity/SettingActivity";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";


export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    MyPageActivity,
    SettingActivity,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        MyPageActivity: "/my-page",
        SettingActivity: "/setting",
      },
      fallbackActivity: () => "MyPageActivity",
    }),
  ],
  /**
   * historySyncPlugin이 해당 옵션을 덮어쓰므로 initialActivity는 더 이상 작동하지 않아요.
   * routes
   * - 액티비티와 URL 템플릿을 연결해요. 액티비티의 파라미터를 Path Parameter로 표현할 수 있어요.
   * - 만약 액티비티의 파라미터가 해당 URL 템플릿에 없다면 자동으로 Query Parameter로 표현돼요.
   *
   * fallbackActivity 
   * - 첫 진입시에 현재 URL과 매핑되는 URL이 없는 경우 어떤 액티비티로 보낼지 결정해요. 
   * - 일반적으로 404 페이지를 만들고 여기에 할당해요.
   */
});
