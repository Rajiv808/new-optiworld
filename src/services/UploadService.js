export const uploadImage = async (file) => {
  console.log("Uploading file:", file)

  const formData = new FormData()

  formData.append("file", file)
  formData.append("upload_preset", "optiworld")

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dg83sizgf/image/upload",
    {
      method: "POST",
      body: formData,
    }
  )

  const data = await response.json()

  console.log("Cloudinary response:", data)

  if (!response.ok) {
    throw new Error(
      data?.error?.message || "Cloudinary upload failed"
    )
  }

  return data.secure_url
}