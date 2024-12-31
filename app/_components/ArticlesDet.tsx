// import Image from "next/image";
// import avatar from "@/public/avatar.jpg";

// import { useTranslations } from "next-intl";
// function ArticlesDet() {
//   const t = useTranslations("blogs");
//   return (
//     <div className="min-h-screen bg-primary-10 text-black">
//       <header className="flex justify-between items-center py-4 border-b border-gray-200 max-w-4xl mx-auto my-8 px-2 sm:px-10">
//         <div className="flex items-center space-x-4 gap-2">
//           <Image
//             src={avatar}
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//           <h1 className="text-base sm:text-xl font-semibold">
//             {t("profile_name")}
//           </h1>
//         </div>
//         <div>
//           <span className="text-gray-500">{t("profile_date")}</span>
//         </div>
//       </header>

//       <main>
//         <div className="max-w-4xl mx-auto my-8 px-2 sm:px-10">
//           <p className="text-lg mb-4">{t("intro_paragraph_1")}</p>
//           <p className="text-lg mb-4">{t("intro_paragraph_2")}</p>
//           <blockquote className="italic border-l-4 border-gray-300 pl-4 my-6">
//             {t("quote")}
//           </blockquote>
//           <p className="text-lg mb-4">{t("passion_paragraph")}</p>
//           <p className="text-lg mb-4">{t("conclusion_paragraph_1")}</p>
//           <p className="text-lg mb-4">{t("conclusion_paragraph_2")}</p>
//           <p className="text-lg mb-4">{t("conclusion_paragraph_3")}</p>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between items-center max-w-4xl mx-auto my-8 px-2 sm:px-10 border-t border-gray-200 py-6">
//           <div>
//             <button className="flex items-center space-x-2 px-4 py-2 border border-black rounded-full sm:rounded-md hover:bg-gray-100">
//               <span>{t("previous_button")}</span>
//             </button>
//             <p className="text-gray-500 mt-2 hidden sm:block">
//               {t("previous_text")}
//             </p>
//           </div>
//           <div className="flex flex-col items-end gap-2">
//             <button className="flex items-center space-x-2 px-4 py-2 border border-black rounded-full sm:rounded-md hover:bg-gray-100">
//               <span>{t("next_button")}</span>
//             </button>
//             <p className="text-gray-500 hidden sm:block">{t("next_text")}</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ArticlesDet;

import Image from "next/image";
import avatar from "@/public/avatar.jpg";
import { useState } from "react";

function ArticlesDet() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(avatar);
  const [headerContent, setHeaderContent] = useState({
    profileName: "Alex Carter",
    profileDate: "23 January 2025",
  });
  const [content, setContent] =
    useState(`Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

"With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable."

His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditMode = () => setIsEditing((prev) => !prev);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHeaderContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const applyStyle = (tag: string) => {
    const textarea = document.getElementById(
      "editable-content"
    ) as HTMLTextAreaElement;
    const { selectionStart, selectionEnd, value } = textarea;

    if (selectionStart !== selectionEnd) {
      const selectedText = value.substring(selectionStart, selectionEnd);
      const styledText = `<${tag}>${selectedText}</${tag}>`;
      setContent(
        value.substring(0, selectionStart) +
          styledText +
          value.substring(selectionEnd)
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-primary-10 text-black">
      <header className="flex justify-between items-center py-4 border-b border-gray-200 max-w-4xl mx-auto my-8 px-2 sm:px-10">
        <div className="flex items-center space-x-4 gap-2">
          <Image
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-full"
            width={48}
            height={48}
          />
          <div>
            {!isEditing ? (
              <>
                <h1 className="text-base sm:text-xl font-semibold">
                  {headerContent.profileName}
                </h1>
                <span className="text-gray-500">
                  {headerContent.profileDate}
                </span>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="profileName"
                  value={headerContent.profileName}
                  onChange={handleHeaderChange}
                  className="border rounded px-2 py-1 text-sm"
                  placeholder="Profile Name"
                />
                <input
                  type="text"
                  name="profileDate"
                  value={headerContent.profileDate}
                  onChange={handleHeaderChange}
                  className="border rounded px-2 py-1 text-sm"
                  placeholder="Profile Date"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-sm"
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <button
            onClick={toggleEditMode}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </header>

      <main>
        {!isEditing ? (
          <div
            className="max-w-4xl mx-auto my-8 px-2 sm:px-10 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto my-8 px-2 sm:px-10"
          >
            <div className="mb-4">
              <button
                type="button"
                className="px-2 py-1 border rounded mr-2"
                onClick={() => applyStyle("i")}
              >
                Italic
              </button>
              <button
                type="button"
                className="px-2 py-1 border rounded mr-2"
                onClick={() => applyStyle("b")}
              >
                Bold
              </button>
              <button
                type="button"
                className="px-2 py-1 border rounded"
                onClick={() => applyStyle("u")}
              >
                Underline
              </button>
            </div>
            <textarea
              id="editable-content"
              value={content}
              onChange={handleContentChange}
              rows={15}
              className="w-full border px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save Changes
            </button>
          </form>
        )}
      </main>

      {/* Pagination Section */}
      <div className="flex justify-between items-center max-w-4xl mx-auto my-8 px-2 sm:px-10 border-t border-gray-200 py-6">
        <div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-black rounded-full sm:rounded-md hover:bg-gray-100">
            <span>← Previous</span>
          </button>
          <p className="text-gray-500 mt-2 hidden sm:block">
            5 Tips for Better Cardio Sessions
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="flex items-center space-x-2 px-4 py-2 border border-black rounded-full sm:rounded-md hover:bg-gray-100">
            <span>Next →</span>
          </button>
          <p className="text-gray-500 hidden sm:block">
            Meal Prep Basics for Gym Enthusiasts
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticlesDet;
