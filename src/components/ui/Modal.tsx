/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import Form from "../Form/Form";
import { Button } from "antd/lib";
import instance from "../../utils/axios";
import toast from "react-hot-toast";
import FormTextarea from "../Form/FormTextarea";
import { SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { IComment } from "../../interface";
import CommentReply from "./CommentReply";

type FormValues = {
  body: string;
};

const ModalBox = ({
  id,
  open,
  setOpen,
}: {
  id: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [refetch, setRefetch] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const res = await instance.get(`/posts/${id}/comments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setComments(res.data.data);
      setRefetch(false);
    };

    fetchComments();
  }, [id, refetch]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const payload = {
        body: data.body,
        postId: id,
      };

      const result = await instance.post("/comments", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (result.data.statusCode !== 201) {
        return toast.error("Comment not sent");
      }

      setRefetch(true);
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <Modal
      cancelText="cancel"
      okText="ok"
      open={open}
      footer={false}
      onCancel={handleCancel}>
      <div>
        <Form submitHandler={onSubmit}>
          <div>
            <FormTextarea
              name="body"
              required
              placeholder="Whats on your mind?"
            />
          </div>
          <div
            style={{
              margin: "15px 0px",
            }}>
            <Button type="primary" htmlType="submit">
              Send Comment
            </Button>
          </div>
        </Form>
      </div>
      <div
        style={{
          maxHeight: "250px",
          overflowY: "scroll",
        }}>
        <p>comments</p>
        {comments.map((comment: IComment) => (
          <div key={comment?.id}>
            <CommentReply comment={comment} />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ModalBox;
