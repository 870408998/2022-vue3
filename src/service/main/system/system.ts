import gxRequest from "../../index";

import type { IDataType } from "@/service/types";

export function getPageListData(url: string, queryInfo: any) {
  return gxRequest.post<IDataType>({
    url: url,
    data: queryInfo,
  });
}
