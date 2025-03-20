import Link from "next/link"
import { Calendar, LogOut, Search, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClientDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">BarberStyle</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-right">
              <div className="font-medium">Miguel Moreno</div>
              <div className="text-muted-foreground">Cliente</div>
            </div>
            <Button variant="ghost" size="icon" className="text-accent">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-accent">
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
            <div className="font-medium text-lg text-accent">Panel de Cliente</div>
            <nav className="space-y-1">
              <Link
                href="/client/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-accent text-accent-foreground"
              >
                <Calendar className="h-5 w-5" />
                <span>Mis Citas</span>
              </Link>
              <Link
                href="/client/find-barber"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Search className="h-5 w-5" />
                <span>Buscar Barbero</span>
              </Link>
              <Link
                href="/client/profile"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <User className="h-5 w-5" />
                <span>Perfil</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-accent-foreground">Mis Citas</h2>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/client/find-barber">Reservar Nueva Cita</Link>
              </Button>
            </div>
            <Tabs defaultValue="upcoming" className="bg-white rounded-lg p-1 shadow-sm">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upcoming">Próximas</TabsTrigger>
                <TabsTrigger value="past">Pasadas</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="space-y-4 mt-4 p-4">
                <Card className="border-2 border-accent/20 shadow-md overflow-hidden">
                  <div className="h-1 bg-accent w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>Corte Regular</CardTitle>
                        <CardDescription>Con Juan Pérez en Barbería Estilo Urbano</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Mañana</div>
                        <div className="text-sm text-muted-foreground">10:00 AM</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <div>Duración: 40 minutos</div>
                      <div>ID de Barbero: #12345</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Reprogramar</Button>
                    <Button variant="destructive">Cancelar</Button>
                  </CardFooter>
                </Card>
                <Card className="border-2 border-accent/20 shadow-md overflow-hidden">
                  <div className="h-1 bg-accent w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>Recorte de Barba</CardTitle>
                        <CardDescription>Con Javier Torres en Barberos del Centro</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Próxima Semana</div>
                        <div className="text-sm text-muted-foreground">Martes, 2:00 PM</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <div>Duración: 30 minutos</div>
                      <div>ID de Barbero: #23456</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Reprogramar</Button>
                    <Button variant="destructive">Cancelar</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="past" className="space-y-4 mt-4 p-4">
                <Card className="border-2 border-primary/10 shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>Corte y Barba</CardTitle>
                        <CardDescription>Con Juan Pérez en Barbería Estilo Urbano</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Semana Pasada</div>
                        <div className="text-sm text-muted-foreground">Viernes, 11:00 AM</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <div>Duración: 60 minutos</div>
                      <div>ID de Barbero: #12345</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Reservar de Nuevo</Button>
                  </CardFooter>
                </Card>
                <Card className="border-2 border-primary/10 shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>Corte Fade</CardTitle>
                        <CardDescription>Con Roberto Méndez en Cortes Modernos</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Hace 2 Semanas</div>
                        <div className="text-sm text-muted-foreground">Lunes, 3:00 PM</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <div>Duración: 40 minutos</div>
                      <div>ID de Barbero: #34567</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Reservar de Nuevo</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-accent-foreground">Barberos Recomendados</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-2 border-accent/20 shadow-md card-hover">
                    <CardHeader>
                      <CardTitle>Juan Pérez</CardTitle>
                      <CardDescription>Barbería Estilo Urbano</CardDescription>
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
                        <span className="ml-2 text-sm text-muted-foreground">5.0 (124 reseñas)</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        <div>Especialista en fade y cortes clásicos</div>
                        <div>ID de Barbero: #12345</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/client/book/12345">Reservar Cita</Link>
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

