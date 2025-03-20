import Link from "next/link"
import { Calendar, LogOut, Search, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FindBarber() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">BarberBook</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-right">
              <div className="font-medium">Michael Brown</div>
              <div className="text-muted-foreground">Client</div>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r hidden md:block">
          <div className="p-4 space-y-4">
            <div className="font-medium text-lg">Dashboard</div>
            <nav className="space-y-1">
              <Link
                href="/client/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Calendar className="h-5 w-5" />
                <span>My Appointments</span>
              </Link>
              <Link
                href="/client/find-barber"
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground"
              >
                <Search className="h-5 w-5" />
                <span>Find a Barber</span>
              </Link>
              <Link
                href="/client/profile"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Find a Barber</h2>
              <p className="text-muted-foreground">Search by name or barber ID</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Search by Name</CardTitle>
                  <CardDescription>Find a barber by their name</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="barber-name">Barber Name</Label>
                    <Input id="barber-name" placeholder="Enter barber name" />
                  </div>
                  <Button className="w-full">Search</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Search by ID</CardTitle>
                  <CardDescription>Find a barber using their unique ID</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="barber-id">Barber ID</Label>
                    <Input id="barber-id" placeholder="Enter barber ID (e.g., #12345)" />
                  </div>
                  <Button className="w-full">Search</Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Popular Barbers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "John Doe",
                    shop: "Style Cuts Barbershop",
                    rating: 5.0,
                    reviews: 124,
                    specialty: "Fades and classic cuts",
                    id: "12345",
                  },
                  {
                    name: "James Wilson",
                    shop: "Downtown Barbers",
                    rating: 4.8,
                    reviews: 98,
                    specialty: "Beard styling and grooming",
                    id: "23456",
                  },
                  {
                    name: "Robert Miller",
                    shop: "Modern Cuts",
                    rating: 4.9,
                    reviews: 156,
                    specialty: "Modern styles and coloring",
                    id: "34567",
                  },
                ].map((barber) => (
                  <Card key={barber.id}>
                    <CardHeader>
                      <CardTitle>{barber.name}</CardTitle>
                      <CardDescription>{barber.shop}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">
                          {barber.rating} ({barber.reviews} reviews)
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        <div>Specializes in {barber.specialty}</div>
                        <div>Barber ID: #{barber.id}</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/client/book/${barber.id}`}>Book Appointment</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

