import Axios from "axios";
//http://134.249.181.40:7777/api/fe8ba3b8-2075-4272-aa61-036d34d4192c/
//eslint-disable-next-line
export default (id) => Axios.get(`http://134.249.181.40:7777/api/${id}/`);
