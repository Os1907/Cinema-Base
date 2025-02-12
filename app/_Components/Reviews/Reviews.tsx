

import Image from "next/image"

export interface Comment {
  id: number
  text: string
  author: string
  content: string
  url: string
  author_details: {
    avatar_path: string
  }
}

interface CommentListProps {
  comments: Comment[]
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div 
    // style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(155, 155, 155, 0.5) transparent" }}
    className="space-y-4 mb-5 bg-white bg-opacity-20 borderGlass rounded-3xl w-full lg:w-4/5 ml-auto p-5 mt-5 max-h-[360px] scrollbar-hide overflow-y-scroll">
      <h2 className="text-white text-center text-2xl font-bold">
        Reviews
      </h2>
      {comments.length > 0 ? (
        <>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4  rounded-2xl  mBlur relative border shadow-sm bg-white bg-opacity-30 borderGlass flex"
            >
              <div className=" blur-2xl absolute inset-0 w-full h-full -z-10" />
              {comment?.author_details?.avatar_path && (
                <div className="mr-4">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${comment.author_details.avatar_path}`}
                    width={50}
                    height={50}
                    alt={`${comment.author}'s avatar`}
                    className="w-10 lg:w-14 object-cover rounded-full block borderGlass"
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-semibold">{comment.author}</p>
                <span className="text-xs text-gray-800 line-clamp-3">{comment.content}</span>
              </div>
            </div>
          ))}
        
        </>
      ) : (
        <p className="text-gray-500">No Reviews available.</p>
      )}
    </div>
  )
}

export default CommentList

