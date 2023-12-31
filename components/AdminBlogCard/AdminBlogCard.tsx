import Link from "next/link";
import moment from "moment";

const AdminBlogCard = ({ blog }: { blog: BlogData }) => {
  const dateTimeAgo = moment(new Date(blog?.updatedAt)).fromNow();
  return (
    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
      <div className="flex justify-between">
        <div className="text-gray-400 text-xs">Id: {blog?._id}</div>
        <div className="text-gray-400 text-xs">{dateTimeAgo}</div>
      </div>
      <h3 className="font-bold hover:text-yellow-800 hover:underline">
        {blog?.title}
      </h3>
      {/* <div className="text-sm text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          className="text-gray-800 inline align-middle mr-1"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
        Deadline is today
      </div> */}
      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
        <Link
          className="font-semibold"
          href={`/admin/posts/edit?id=${blog?._id}`}
        >
          Edit Post
        </Link>
      </div>
    </div>
  );
};

export default AdminBlogCard;
