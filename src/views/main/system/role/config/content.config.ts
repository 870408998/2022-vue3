export const contentTableConfig = {
  title: "角色列表",
  propList: [
    { prop: "name", label: "角色名", minWidth: "100" },
    { prop: "intro", label: "真实姓名", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "updateAt",
    },
    {
      label: "操作",
      minWidth: "140",
      slotName: "handler",
    },
  ],
  showIndexColumn: true,
  showSelectColumn: true,
};
