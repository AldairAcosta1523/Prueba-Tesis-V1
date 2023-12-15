'use client'
import { ArchiveBoxArrowDownIcon, CalendarDaysIcon, PresentationChartLineIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Devoluciones gratuitas',
    description:
      '¡No te preocupes si cambias de opinión! Te ofrecemos devoluciones gratis para todos nuestros productos. Si no te gusta lo que compraste, puedes devolverlo en un plazo de 7 días. 😊',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Proceso de reembolso seguro',
    description:
      'Tu dinero está a salvo con nosotros. Nuestro proceso de reembolso es seguro y confiable. En cuanto recibamos tu artículo devuelto, te devolveremos tu dinero sin demora. 💸',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Procedimiento de devolución fácil',
    description:
      'Devolver un producto es pan comido con nuestro sencillo procedimiento de devolución. Solo tienes que seguir las instrucciones que te damos y enviar el artículo de vuelta en su estado original. 📦',
    icon: ArchiveBoxArrowDownIcon,
  },
  {
    name: 'Garantía de satisfacción al cliente',
    description:
      'Tu satisfacción es nuestra prioridad. Si tienes algún problema con tu compra, nuestro equipo de atención al cliente está a tu disposición para ayudarte y resolver cualquier duda. 🙌',
    icon: PresentationChartLineIcon,
  },
]

function Section2Dev() {
  return (
    <div className="bg-white py-24 bg-gradient-to-r from-white via-gray-100 to-gray-300 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#135dd0] saturate-150">Política de devoluciones</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas saber sobre nuestras devoluciones
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
  Sabemos que a veces las cosas no salen como esperamos, por eso queremos ofrecerte la posibilidad de devolver tus productos sin complicaciones. Si no estás satisfecho con tu compra, puedes hacerlo en un plazo de 7 días desde que recibas el pedido. Estamos aquí para ayudarte en cada paso del camino y asegurarnos de que estés contento con nuestras políticas de devolución. 😊
</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#135dd0] saturate-150">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Section2Dev
