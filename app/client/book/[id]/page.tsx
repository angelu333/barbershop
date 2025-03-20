import Link from "next/link"
import { ArrowLeft, LogOut, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WeeklyCalendarBooking } from "@/components/weekly-calendar-booking"

export default function BookAppointment({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/client/find-barber"
              className="flex items-center text-muted-foreground hover:text-foreground mr-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
            <h1 className="text-2xl font-bold">BarberBook</h1>
          </div>
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
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Book an Appointment</h2>
            <p className="text-muted-foreground">Select a date and time for your appointment with John Doe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Select Date & Time</CardTitle>
                  <CardDescription>Choose an available time slot</CardDescription>
                </CardHeader>
                <CardContent>
                  <WeeklyCalendarBooking />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Barber Details</CardTitle>
                  <CardDescription>John Doe - Style Cuts Barbershop</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                    <span className="ml-2 text-sm text-muted-foreground">5.0 (124 reviews)</span>
                  </div>
                  <div className="text-sm space-y-2">
                    <div>Specializes in fades and classic cuts</div>
                    <div>Barber ID: #{params.id}</div>
                    <div className="font-medium mt-4">Working Hours:</div>
                    <div className="text-muted-foreground">
                      <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                      <div>Saturday: 10:00 AM - 4:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Appointment Details</CardTitle>
                  <CardDescription>Select service and review details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium">Service</div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="haircut">Regular Haircut ($25)</SelectItem>
                        <SelectItem value="fade">Fade Haircut ($30)</SelectItem>
                        <SelectItem value="beard">Beard Trim ($15)</SelectItem>
                        <SelectItem value="combo">Haircut & Beard ($35)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Selected Time</div>
                    <div className="text-muted-foreground">Please select a time slot from the calendar</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled>
                    Request Appointment
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

