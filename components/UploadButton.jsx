import React from "react";

export default function UploadButton() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
  };

  return (
    <div className="flex rounded-[10px] border border-[#a0a0a0] p-28 mt-8">
      <div
        className="flex flex-col w-full items-center
      "
        style={{ cursor: "pointer" }}
      >
        <input
          type="file"
          id="imageUpload"
          name="imageUpload"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V12C16 12.5304 15.7893 13.0391 15.4142 13.4142C15.0391 13.7893 14.5304 14 14 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V2ZM1 11V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V8.5L11.223 6.553C11.1292 6.50602 11.023 6.48973 10.9195 6.50642C10.8159 6.52311 10.7203 6.57194 10.646 6.646L6.936 10.356L4.276 8.584C4.17996 8.52006 4.06476 8.4913 3.94994 8.5026C3.83512 8.5139 3.72773 8.56456 3.646 8.646L1 11ZM6 4.5C6 4.10218 5.84196 3.72064 5.56066 3.43934C5.27936 3.15804 4.89782 3 4.5 3C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5C3 4.89782 3.15804 5.27936 3.43934 5.56066C3.72064 5.84196 4.10218 6 4.5 6C4.89782 6 5.27936 5.84196 5.56066 5.56066C5.84196 5.27936 6 4.89782 6 4.5Z"
            fill="white"
          />
        </svg>

        <label htmlFor="imageUpload" className="text-center mt-2">
          Click to upload a photo.
        </label>
      </div>
    </div>
  );
}
