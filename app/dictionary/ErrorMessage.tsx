import { ErrorMessage as ErrorMessageType } from "./dictionary-service";

const ErrorMessage = ({ dictionary }: { dictionary: ErrorMessageType }) => {
  const { message, resolution }: { message: string; resolution: string } = {
    ...dictionary,
  };
  return (
    <div className="text-red-700 mt-10 w-full text-center">
      {message}
      <br />
      {resolution}
    </div>
  );
};
export { ErrorMessage };
