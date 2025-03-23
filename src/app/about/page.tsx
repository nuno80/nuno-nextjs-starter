import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-10 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-2xl">
          Learn more about our mission, values, and the team behind our platform.
        </p>

        <div className="mt-12 grid gap-12">
          {/* Our Story */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2023, our company began with a simple mission: to create intuitive, accessible, and powerful
              tools that help people achieve their goals. What started as a small project has grown into a platform used
              by thousands of customers worldwide.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe in building products that are not only functional but also enjoyable to use. Our team is
              dedicated to continuous improvement and innovation, always listening to our users' feedback to make our
              platform better.
            </p>
          </section>

          {/* Our Team */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Our Team</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-muted mb-4"></div>
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p className="text-muted-foreground">CEO & Founder</p>
              </div>

              {/* Team Member 2 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-muted mb-4"></div>
                <h3 className="text-xl font-bold">John Smith</h3>
                <p className="text-muted-foreground">CTO</p>
              </div>

              {/* Team Member 3 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-muted mb-4"></div>
                <h3 className="text-xl font-bold">Emily Johnson</h3>
                <p className="text-muted-foreground">Head of Design</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mx-auto max-w-xl bg-muted/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions or want to learn more about our company? We'd love to hear from you!
            </p>
            <Button className="mt-6">Contact Us</Button>
          </section>
        </div>
      </main>
    </div>
  )
}

