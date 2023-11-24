import { useEffect, useState } from "react";
import userService, { User } from "../components/services/user-service";
import CancelledError from "../components/services/api-client.ts";
import { AxiosError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CancelledError) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      });

    cancel();
  }, []);

  return { users, error, isLoading, setUsers, setError };
};
export default useUsers;
