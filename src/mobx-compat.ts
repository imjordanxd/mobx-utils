import * as mobx from "mobx"
import { AnnotationMapEntry, IEqualsComparer } from "mobx"

// MobX 7 replaced the namespaced annotations and comparers (`action.bound`, `observable.ref`,
// `comparer.structural`) with named exports (`actionBound`, `observableRef`,
// `compareStructural`). Resolve whichever one exists so the same code works with MobX 6 and 7.
const m = mobx as any

export const actionBound: AnnotationMapEntry = m.actionBound ?? m.action.bound
export const observableRef: AnnotationMapEntry = m.observableRef ?? m.observable.ref
export const compareStructural: IEqualsComparer<any> = m.compareStructural ?? m.comparer.structural
