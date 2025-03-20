"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WeeklyCalendar() {
  const [currentWeek, setCurrentWeek] = useState(new Date())

  // Generar días de la semana a partir de la semana actual
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentWeek)
    date.setDate(date.getDate() - date.getDay() + i)
    return date
  })

  // Generar franjas horarias de 9 AM a 6 PM
  const timeSlots = Array.from({ length: 10 }, (_, i) => {
    const hour = i + 9
    return `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? "PM" : "AM"}`
  })

  // Datos de ejemplo de citas
  const appointments = [
    { day: 1, time: "10:00 AM", client: "Miguel Moreno", service: "Corte Regular" },
    { day: 1, time: "11:00 AM", client: "David Sánchez", service: "Recorte de Barba" },
    { day: 1, time: "1:00 PM", client: "Javier Torres", service: "Corte y Barba" },
    { day: 1, time: "3:00 PM", client: "Roberto Méndez", service: "Corte Fade" },
    { day: 2, time: "9:00 AM", client: "Guillermo Jiménez", service: "Corte Regular" },
    { day: 3, time: "2:00 PM", client: "Tomás Alonso", service: "Corte y Peinado" },
    { day: 4, time: "4:00 PM", client: "Daniel Soto", service: "Recorte de Barba" },
    { day: 5, time: "10:00 AM", client: "Cristóbal Díaz", service: "Corte Fade" },
  ]

  // Función para obtener cita para un día y hora específicos
  const getAppointment = (dayIndex: number, time: string) => {
    return appointments.find((appointment) => appointment.day === dayIndex && appointment.time === time)
  }

  // Función para navegar a la semana anterior
  const previousWeek = () => {
    const prevWeek = new Date(currentWeek)
    prevWeek.setDate(prevWeek.getDate() - 7)
    setCurrentWeek(prevWeek)
  }

  // Función para navegar a la semana siguiente
  const nextWeek = () => {
    const nextWeek = new Date(currentWeek)
    nextWeek.setDate(nextWeek.getDate() + 7)
    setCurrentWeek(nextWeek)
  }

  // Formatear fecha como "Lun 01" o resaltar si es hoy
  const formatDate = (date: Date) => {
    const today = new Date()
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()

    const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
    const day = dayNames[date.getDay()]
    const dayNum = date.getDate()

    return (
      <div className={`text-center ${isToday ? "bg-primary text-primary-foreground rounded-md px-2" : ""}`}>
        <div className="font-medium">{day}</div>
        <div>{dayNum}</div>
      </div>
    )
  }

  return (
    <Card className="p-4 border-2 border-primary/10 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" size="sm" onClick={previousWeek} className="border-primary/20 text-primary">
          <ChevronLeft className="h-4 w-4 mr-1" /> Semana Anterior
        </Button>
        <div className="font-medium text-primary">
          {new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(weekDays[0])}
        </div>
        <Button variant="outline" size="sm" onClick={nextWeek} className="border-primary/20 text-primary">
          Siguiente Semana <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <div className="grid grid-cols-8 gap-1">
        <div className="sticky left-0 bg-card"></div>
        {weekDays.map((date, i) => (
          <div key={i} className="text-center p-2">
            {formatDate(date)}
          </div>
        ))}

        {timeSlots.map((time, timeIndex) => (
          <>
            <div key={`time-${timeIndex}`} className="sticky left-0 bg-card p-2 text-sm text-muted-foreground">
              {time}
            </div>
            {weekDays.map((_, dayIndex) => {
              const appointment = getAppointment(dayIndex, time)
              return (
                <div
                  key={`slot-${dayIndex}-${timeIndex}`}
                  className={`border rounded-md p-1 min-h-[60px] ${
                    appointment ? "bg-primary/10 border-primary/20" : "hover:bg-muted cursor-pointer"
                  }`}
                >
                  {appointment && (
                    <div className="text-xs">
                      <div className="font-medium truncate">{appointment.client}</div>
                      <div className="text-muted-foreground truncate">{appointment.service}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </>
        ))}
      </div>
    </Card>
  )
}

