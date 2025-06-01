"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function SignupButtonWithModal() {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setSuccess(false)
  },[showModal])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      // TODO: Replace with your mailing list or Firebase logic
      // Example: await addDoc(collection(db, "mailingList"), { name, email })
      await new Promise(res => setTimeout(res, 1000)) // fake delay

      // 3rd party mailing list integration

      setSuccess(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    }
    setLoading(false)
  }

  return (
    <>
      <button
        type="button"
        className={cn(buttonVariants({ size: "lg" }))}
        onClick={() => setShowModal(true)}
      >
        Sign Up
      </button>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25">
          <div className="bg-background rounded-lg p-8 shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            {success ? (
              <div className="text-green-600">Thank you for signing up!</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                {error && <div className="text-red-600">{error}</div>}
                <button
                  type="submit"
                  className={cn(buttonVariants({ size: "lg" }), "w-full")}
                  disabled={loading}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}