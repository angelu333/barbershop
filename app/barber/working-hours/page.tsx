import Link from "next/link"
import { Calendar, Clock, LogOut, Settings, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function WorkingHours() {
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
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
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
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground"
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
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-primary">Horarios de Trabajo</h2>
              <p className="text-muted-foreground">Establece tu disponibilidad y duración de citas</p>
            </div>
            <Card className="border-2 border-primary/20 shadow-md">
              <CardHeader>
                <CardTitle>Configuración de Citas</CardTitle>
                <CardDescription>Configura la duración de tus citas y tiempo entre ellas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="appointment-duration">Duración de Cita</Label>
                    <Select defaultValue="40">
                      <SelectTrigger id="appointment-duration">
                        <SelectValue placeholder="Selecciona duración" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="40">40 minutos</SelectItem>
                        <SelectItem value="45">45 minutos</SelectItem>
                        <SelectItem value="60">60 minutos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buffer-time">Tiempo Entre Citas</Label>
                    <Select defaultValue="5">
                      <SelectTrigger id="buffer-time">
                        <SelectValue placeholder="Selecciona tiempo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Sin tiempo</SelectItem>
                        <SelectItem value="5">5 minutos</SelectItem>
                        <SelectItem value="10">10 minutos</SelectItem>
                        <SelectItem value="15">15 minutos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 shadow-md">
              <CardHeader>
                <CardTitle>Horario Semanal</CardTitle>
                <CardDescription>Establece tus horarios para cada día de la semana</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((day) => (
                  <div key={day} className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Switch id={`${day.toLowerCase()}-toggle`} defaultChecked={day !== "Domingo"} />
                      <Label htmlFor={`${day.toLowerCase()}-toggle`} className="font-medium min-w-24">
                        {day}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 flex-1">
                      <div className="grid grid-cols-2 gap-2 flex-1">
                        <div className="flex items-center space-x-2">
                          <Label htmlFor={`${day.toLowerCase()}-start`} className="text-sm whitespace-nowrap">
                            Inicio:
                          </Label>
                          <Select defaultValue={day !== "Sábado" ? "9:00" : "10:00"}>
                            <SelectTrigger id={`${day.toLowerCase()}-start`} className="w-full">
                              <SelectValue placeholder="Hora inicio" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 13 }, (_, i) => i + 7).map((hour) => (
                                <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                                  {hour > 12 ? `${hour - 12}:00 PM` : hour === 12 ? "12:00 PM" : `${hour}:00 AM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Label htmlFor={`${day.toLowerCase()}-end`} className="text-sm whitespace-nowrap">
                            Fin:
                          </Label>
                          <Select defaultValue={day !== "Sábado" ? "18:00" : "16:00"}>
                            <SelectTrigger id={`${day.toLowerCase()}-end`} className="w-full">
                              <SelectValue placeholder="Hora fin" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 13 }, (_, i) => i + 12).map((hour) => (
                                <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                                  {hour > 12 ? `${hour - 12}:00 PM` : hour === 12 ? "12:00 PM" : `${hour}:00 AM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 shadow-md">
              <CardHeader>
                <CardTitle>Descansos</CardTitle>
                <CardDescription>Añade descansos a tu horario</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="break-day">Día</Label>
                      <Select defaultValue="lunes">
                        <SelectTrigger id="break-day">
                          <SelectValue placeholder="Selecciona día" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lunes">Lunes</SelectItem>
                          <SelectItem value="martes">Martes</SelectItem>
                          <SelectItem value="miercoles">Miércoles</SelectItem>
                          <SelectItem value="jueves">Jueves</SelectItem>
                          <SelectItem value="viernes">Viernes</SelectItem>
                          <SelectItem value="sabado">Sábado</SelectItem>
                          <SelectItem value="domingo">Domingo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="break-start">Hora Inicio</Label>
                      <Select defaultValue="12:00">
                        <SelectTrigger id="break-start">
                          <SelectValue placeholder="Selecciona hora" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                            <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                              {hour > 12
                                ? `${hour - 12}:00 PM`
                                : hour === 12
                                  ? "12:00 PM"
                                  : hour === 0
                                    ? "12:00 AM"
                                    : `${hour}:00 AM`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="break-end">Hora Fin</Label>
                      <Select defaultValue="13:00">
                        <SelectTrigger id="break-end">
                          <SelectValue placeholder="Selecciona hora" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                            <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                              {hour > 12
                                ? `${hour - 12}:00 PM`
                                : hour === 12
                                  ? "12:00 PM"
                                  : hour === 0
                                    ? "12:00 AM"
                                    : `${hour}:00 AM`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button variant="outline">Añadir Descanso</Button>
                </div>
                <div className="border rounded-md p-4">
                  <div className="text-sm font-medium mb-2">Descansos Actuales</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                      <div>
                        <div className="font-medium">Lunes</div>
                        <div className="text-sm text-muted-foreground">12:00 PM - 1:00 PM</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Eliminar
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                      <div>
                        <div className="font-medium">Miércoles</div>
                        <div className="text-sm text-muted-foreground">12:30 PM - 1:30 PM</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Guardar Horarios
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

