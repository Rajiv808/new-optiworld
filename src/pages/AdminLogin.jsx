import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"

const AdminLogin = () => {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const handleLogin =
    async (e) => {

      e.preventDefault()

      try {

        setLoading(true)

        const userCredential =
          await signInWithEmailAndPassword(
            auth,
            email,
            password
          )

        localStorage.setItem(
          "user",
          JSON.stringify(
            userCredential.user
          )
        )

        alert(
          "Login Successful"
        )

        window.location.href =
          "/dashboard"

      } catch (error) {

        console.log(error)

        alert(
          "Invalid Email or Password"
        )

      } finally {

        setLoading(false)

      }

    }

  return (

    <section className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-center">
          Admin Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-xl"
          />

          <button
            className="w-full bg-orange-700 text-white py-4 rounded-xl"
          >
            {
              loading
                ? "Logging In..."
                : "Login"
            }
          </button>

        </form>

      </div>

    </section>

  )

}

export default AdminLogin