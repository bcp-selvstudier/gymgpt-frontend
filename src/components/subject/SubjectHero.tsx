import type { Subject } from '../../data/subjects'
import { InnerPageHero } from '../layout/InnerPageHero'

type SubjectHeroProps = {
  subject: Subject
}

export function SubjectHero({ subject }: SubjectHeroProps) {
  return <InnerPageHero title={subject.name} heroImage={subject.heroImage} />
}
