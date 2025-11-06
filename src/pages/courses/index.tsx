import { useQueryHandler } from "../../hooks/useQuery";
import {
  FaClock,
  FaUserFriends,
  FaEdit,
  FaSnowflake,
  FaTrashAlt,
} from "react-icons/fa";

interface NameObj {
  uz?: string;
  ru?: string;
}

interface Course {
  _id: string;
  description?: string;
  price: number;
  duration?: string;
  name: NameObj;
  student_count?: number;
}

export default function CoursesPage() {
  const { data, isLoading, isError } = useQueryHandler({
    url: "course/get-courses?is_freeze=false",
    pathname: "courses",
  });

  const courses: Course[] = Array.isArray(data?.data) ? data.data : [];

  if (isLoading)
    return <div className="text-white text-center mt-20">Yuklanmoqda...</div>;
  if (isError)
    return (
      <div className="text-red-500 mt-4 text-center">Xatolik yuz berdi!</div>
    );

  return (
    <div className="px-4 py-8 min-h-screen bg-[#181818]">
      <h2 className="text-xl font-bold mb-8 text-white">Kurslar</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-[#181818] border border-[#292929] rounded-2xl text-white w-full max-w-md mx-auto p-6 shadow-lg flex flex-col transition-all duration-150 hover:border-[#333] hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold">{course.name?.uz ?? "-"}</div>
              <div className="bg-[#282828] rounded-lg px-3 py-1 text-base font-semibold text-[#e7e7e7]">
                {Number(course.price).toLocaleString()} UZS
              </div>
            </div>
            <div className="text-[#c4c4c4] text-base font-normal mb-1">
              {course.description ?? "Yangi kurs"}
            </div>

            <div className="flex items-center mb-4 gap-7">
              <div className="flex items-center gap-2 text-[#bdbdbd]">
                <FaClock className="inline" />
                <span className="text-sm">{course.duration ?? "?"}</span>
              </div>
              <div className="flex items-center gap-2 text-[#bdbdbd]">
                <FaUserFriends className="inline" />
                <span className="text-sm">
                  {course.student_count ?? "?"} students
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <button className="flex-1 bg-[#222] hover:bg-[#333] text-white px-2 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
                <FaEdit /> Edit
              </button>
              <button className="flex-1 bg-[#e53e3e] hover:bg-[#c53030] text-white px-2 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
                <FaTrashAlt /> O'chirish
              </button>
              <button className="flex-1 bg-[#2563eb] hover:bg-[#1744a2] text-white px-2 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
                <FaSnowflake /> Muzlatish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
