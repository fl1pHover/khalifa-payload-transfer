import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_LIST } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Page() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">Түгээмэл асуулт хариулт</h1>

      <Accordion collapsible type="single">
        {FAQ_LIST.map((faq) => {
          return (
            <AccordionItem key={faq.id} value={cn('item-' + faq.id)}>
              <AccordionTrigger className="md:text-xl">{faq.question}</AccordionTrigger>
              <AccordionContent className="md:text-xl pb-10 text-white/85">
                {faq.type === 'ordered' ? (
                  <>
                    {Array.isArray(faq.answer) && (
                      <ol className="space-y-2">
                        {faq.answer.map((li: string, index: number) => (
                          <li key={index}>{li}</li>
                        ))}
                      </ol>
                    )}
                  </>
                ) : (
                  <>{faq.answer}</>
                )}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}
