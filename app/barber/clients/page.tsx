import Link from "next/link"
import { Calendar, Clock, LogOut, Search, Settings, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BarberClients() {
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
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground"
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
              <h2 className="text-2xl font-bold tracking-tight text-primary">Mis Clientes</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar cliente..." className="w-[250px] pl-8 bg-white" />
                </div>
                <Button className="bg-primary hover:bg-primary/90">Añadir Cliente</Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="bg-white rounded-lg p-1 shadow-sm">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="regulars">Habituales</TabsTrigger>
                <TabsTrigger value="new">Nuevos</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Miguel Moreno",
                      visits: 12,
                      lastVisit: "Hace 2 semanas",
                      nextVisit: "Mañana, 10:00 AM",
                      phone: "+52 555 123 4567",
                      email: "miguel@ejemplo.com",
                      preferences: "Corte Fade, sin mucho volumen arriba",
                    },
                    {
                      name: "David Sánchez",
                      visits: 8,
                      lastVisit: "Hace 3 semanas",
                      nextVisit: "Mañana, 11:00 AM",
                      phone: "+52 555 234 5678",
                      email: "david@ejemplo.com",
                      preferences: "Recorte de barba, estilo definido",
                    },
                    {
                      name: "Javier Torres",
                      visits: 15,
                      lastVisit: "Hace 1 semana",
                      nextVisit: "Hoy, 1:00 PM",
                      phone: "+52 555 345 6789",
                      email: "javier@ejemplo.com",
                      preferences: "Corte clásico con tijeras, nada de máquina",
                    },
                    {
                      name: "Roberto Méndez",
                      visits: 5,
                      lastVisit: "Hace 1 mes",
                      nextVisit: "Hoy, 3:00 PM",
                      phone: "+52 555 456 7890",
                      email: "roberto@ejemplo.com",
                      preferences: "Corte Fade con diseño en los lados",
                    },
                    {
                      name: "Tomás Alonso",
                      visits: 2,
                      lastVisit: "Hace 2 meses",
                      nextVisit: "Pendiente",
                      phone: "+52 555 567 8901",
                      email: "tomas@ejemplo.com",
                      preferences: "Corte y peinado, estilo moderno",
                    },
                    {
                      name: "Guillermo Jiménez",
                      visits: 1,
                      lastVisit: "Hace 3 meses",
                      nextVisit: "Pendiente",
                      phone: "+52 555 678 9012",
                      email: "guillermo@ejemplo.com",
                      preferences: "Recorte de barba, estilo natural",
                    },
                  ].map((client, index) => (
                    <Card key={index} className="border-2 border-primary/10 shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle>{client.name}</CardTitle>
                          <div className="text-sm text-muted-foreground">{client.visits} visitas</div>
                        </div>
                        <CardDescription>Última visita: {client.lastVisit}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-sm">
                          <div className="font-medium">Próxima cita:</div>
                          <div className="text-primary">{client.nextVisit}</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Contacto:</div>
                          <div>{client.phone}</div>
                          <div>{client.email}</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Preferencias:</div>
                          <div className="text-muted-foreground">{client.preferences}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="regulars" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Miguel Moreno",
                      visits: 12,
                      lastVisit: "Hace 2 semanas",
                      nextVisit: "Mañana, 10:00 AM",
                      phone: "+52 555 123 4567",
                      email: "miguel@ejemplo.com",
                      preferences: "Corte Fade, sin mucho volumen arriba",
                    },
                    {
                      name: "Javier Torres",
                      visits: 15,
                      lastVisit: "Hace 1 semana",
                      nextVisit: "Hoy, 1:00 PM",
                      phone: "+52 555 345 6789",
                      email: "javier@ejemplo.com",
                      preferences: "Corte clásico con tijeras, nada de máquina",
                    },
                    {
                      name: "David Sánchez",
                      visits: 8,
                      lastVisit: "Hace 3 semanas",
                      nextVisit: "Mañana, 11:00 AM",
                      phone: "+52 555 234 5678",
                      email: "david@ejemplo.com",
                      preferences: "Recorte de barba, estilo definido",
                    },
                  ].map((client, index) => (
                    <Card key={index} className="border-2 border-primary/10 shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle>{client.name}</CardTitle>
                          <div className="text-sm text-muted-foreground">{client.visits} visitas</div>
                        </div>
                        <CardDescription>Última visita: {client.lastVisit}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-sm">
                          <div className="font-medium">Próxima cita:</div>
                          <div className="text-primary">{client.nextVisit}</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Contacto:</div>
                          <div>{client.phone}</div>
                          <div>{client.email}</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Preferencias:</div>
                          <div className="text-muted-foreground">{client.preferences}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="new" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Tomás Alonso",
                      visits: 2,
                      lastVisit: "Hace 2 meses",
                      nextVisit: "Pendiente",
                      phone: "+52 555 567 8901",
                      email: "tomas@ejemplo.com",
                      preferences: "Corte y peinado, estilo moderno",
                    },
                    {
                      name: "Guillermo Jiménez",
                      visits: 1,
                      lastVisit: "Hace 3 meses",
                      nextVisit: "Pendiente",
                      phone: "+52 555 678 9012",
                      email: "guillermo@ejemplo.com",
                      preferences: "Recorte de barba, estilo natural",
                    },
                  ].map((client, index) => (
                    <Card key={index} className="border-2 border-primary/10 shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle>{client.name}</CardTitle>
                          <div className="text-sm text-muted-foreground">{client.visits} visitas</div>
                        </div>
                        <CardDescription>Última visita: {client.lastVisit}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-sm">
                          <div className="font-medium">Próxima cita:</div>
                          <div className="text-primary">{client.nextVisit}</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Contacto:</div>
                          <div>{client.phone}</div>
                          <div>{client.email}</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Preferencias:</div>
                          <div className="text-muted-foreground">{client.preferences}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

