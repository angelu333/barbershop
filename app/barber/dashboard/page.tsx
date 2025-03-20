import Link from "next/link"
import { Calendar, Clock, LogOut, Settings, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WeeklyCalendar } from "@/components/weekly-calendar"

export default function BarberDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">BarberStyle</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-right">
              <div className="font-medium">Juan Pérez</div>
              <div className="text-muted-foreground">ID de Barbero: #12345</div>
            </div>
            <Button variant="ghost" size="icon" className="text-primary">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary">
              <Link href="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r hidden md:block bg-white">
          <div className="p-4 space-y-4">
            <div className="font-medium text-lg text-primary">Panel de Control</div>
            <nav className="space-y-1">
              <Link
                href="/barber/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground"
              >
                <Calendar className="h-5 w-5" />
                <span>Agenda</span>
              </Link>
              <Link
                href="/barber/clients"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Users className="h-5 w-5" />
                <span>Clientes</span>
              </Link>
              <Link
                href="/barber/working-hours"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Clock className="h-5 w-5" />
                <span>Horarios</span>
              </Link>
              <Link
                href="/barber/profile"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <User className="h-5 w-5" />
                <span>Perfil</span>
              </Link>
              <Link
                href="/barber/gallery"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span>Galería</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Agenda Semanal</h2>
              <Button className="bg-primary hover:bg-primary/90">Establecer Horarios</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-primary/10 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-primary">Citas de Hoy</CardTitle>
                  <CardDescription>Tienes 4 citas programadas para hoy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 rounded-md bg-primary/5 border border-primary/10">
                      <div>
                        <div className="font-medium">Miguel Moreno</div>
                        <div className="text-sm text-muted-foreground">Corte Regular</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">10:00 AM</div>
                        <div className="text-sm text-muted-foreground">40 min</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-md bg-primary/5 border border-primary/10">
                      <div>
                        <div className="font-medium">David Sánchez</div>
                        <div className="text-sm text-muted-foreground">Recorte de Barba</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">11:00 AM</div>
                        <div className="text-sm text-muted-foreground">40 min</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-md bg-primary/5 border border-primary/10">
                      <div>
                        <div className="font-medium">Javier Torres</div>
                        <div className="text-sm text-muted-foreground">Corte y Barba</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">1:00 PM</div>
                        <div className="text-sm text-muted-foreground">40 min</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-md bg-primary/5 border border-primary/10">
                      <div>
                        <div className="font-medium">Roberto Méndez</div>
                        <div className="text-sm text-muted-foreground">Corte Fade</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">3:00 PM</div>
                        <div className="text-sm text-muted-foreground">40 min</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent/20 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-accent-foreground">Solicitudes Pendientes</CardTitle>
                  <CardDescription>Tienes 2 solicitudes de cita pendientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="p-2 rounded-md border-2 border-accent/20 bg-accent/5">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <div className="font-medium">Tomás Alonso</div>
                          <div className="text-sm text-muted-foreground">Corte y Peinado</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">Mañana</div>
                          <div className="text-sm text-muted-foreground">11:00 AM</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="w-full">
                          Rechazar
                        </Button>
                        <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                          Aceptar
                        </Button>
                      </div>
                    </div>
                    <div className="p-2 rounded-md border-2 border-accent/20 bg-accent/5">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <div className="font-medium">Guillermo Jiménez</div>
                          <div className="text-sm text-muted-foreground">Recorte de Barba</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">Mañana</div>
                          <div className="text-sm text-muted-foreground">2:00 PM</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="w-full">
                          Rechazar
                        </Button>
                        <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                          Aceptar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-primary">Estadísticas</CardTitle>
                  <CardDescription>Estadísticas de tus citas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Esta Semana</div>
                      <div className="text-2xl font-bold text-primary">18 Citas</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Este Mes</div>
                      <div className="text-2xl font-bold text-primary">72 Citas</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Servicio Más Popular</div>
                      <div className="text-xl font-bold text-primary">Corte Regular</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <WeeklyCalendar />
          </div>
        </main>
      </div>
    </div>
  )
}

