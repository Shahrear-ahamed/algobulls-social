/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler } from "react-hook-form";
import instance from "../../utils/axios";
import Form from "../Form/Form";
import toast from "react-hot-toast";
import { Button } from "antd/lib";
import FormTextarea from "../Form/FormTextarea";

type FormValues = {
  body: string;
};

export default function CreatePost() {
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const result = await instance.post("/posts", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (result.data.statusCode !== 201) {
        return toast.error("Login Failed");
      }

      toast.success("Post Created");
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <div>
      <Form submitHandler={onSubmit}>
        <div>
          <FormTextarea name="body" placeholder="Whats on your mind?" />
        </div>
        <div
          style={{
            margin: "15px 0px",
          }}>
          <Button type="primary" htmlType="submit">
            Create Post
          </Button>
        </div>
      </Form>
    </div>
  );
}
