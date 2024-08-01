import { describe, expect, it } from 'vitest'
import { UUID } from '../src/_Shared/value-object/uuid'

const count = (str) => {
    const re = /-/g
    return ((str || '').match(re) || []).length
  }

describe("UUID", () => {
    it("generate a uuid", () => {
        const uuid = UUID.createUUID();
        expect(typeof uuid).toEqual("string")
        expect(uuid.length).toEqual(36)
        expect(count(uuid)).toEqual(4)
    })
})