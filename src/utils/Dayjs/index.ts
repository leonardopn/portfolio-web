import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

export const defaultTimezone = "America/Sao_Paulo";

dayjs.tz.setDefault(defaultTimezone);

export default dayjs;
