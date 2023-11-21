/* eslint-disable no-undef */
import { excluseFeatureSchema } from '../excludeFeatureSchema.js'

describe('Delete a feature', () => {
    describe('When a valid param', () => {
        it('Should pass a validated param', () => {
            const validParam = {
                params: {
                    id: "4aa5d43a-5808-4206-8093-f486d152ccb3"
                }
            }
            const validParamParsed = excluseFeatureSchema.safeParse(validParam);
            expect(validParamParsed.success).toBe(true)
        })
    describe('When an invalid param', () => {
        it('Should not pass a payload without param', () => {
            const validParam = {                
                id: "4aa5d43a-5808-4206-8093-f486d1"
            }
            const validParamParsed = excluseFeatureSchema.safeParse(validParam);
            expect(validParamParsed.success).toBe(false)
            })
        it('Should not pass a payload inside a body', () => {
            const validParam = {
                body: {
                    id: "4aa5d43a-5808-4206-8093-f486d1"
                }
            }
            const validParamParsed = excluseFeatureSchema.safeParse(validParam);
            expect(validParamParsed.success).toBe(false)
            })
        it('Should not pass a payload inside a query', () => {
            const validParam = {
                query: {
                    id: "4aa5d43a-5808-4206-8093-f486d1"
                }
            }
            const validParamParsed = excluseFeatureSchema.safeParse(validParam);
            expect(validParamParsed.success).toBe(false)
            })
        it('Should not pass an empty string', () => {
            const validParam = {
                params: {
                    id: ""
                }
            }
            const validParamParsed = excluseFeatureSchema.safeParse(validParam);
            expect(validParamParsed.success).toBe(false)
            })
        })
    })
})