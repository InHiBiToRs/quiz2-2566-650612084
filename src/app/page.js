"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        <PostOwner
          userImagePath="/profileImages/Tanakrit.jpg"
          username="ธนกฤต บุญยัง 650612084"
          PostText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum={100}
        />
        {comments.map((User) => (
          <Comment
            key={User.id}
            username={User.username}
            userImagePath={User.userImagePath}
            commentText={User.commentText}
            likeNum={User.likeNum}
            replies={User.replies}
          />
        ))}
      </div>
    </div>
  );
}
