/* eslint-disable no-undef */
import {updateFeatureSchema} from '../updateFeatureSchema';

describe('Update feature', () => {
    describe('When a valid body and params', () => {
        it('Should pass a full validated body', () => {
            const bodyandParamValid = {
                body: {
                    name: "Caracteristica premium",
                    massageSystem: true,
                    shielding: false,
                    sunRoof: true,
                    automatic: false,
                    selfDriving: true,
                },
                params:{
                    id: "4aa5d43a-5808-4206-8093-f486d152ccb3"
                }
            }
            const bodyandParamValidParsed = updateFeatureSchema.safeParse(bodyandParamValid);
            expect(bodyandParamValidParsed.success).toBe(true)
        })
        it('Should pass a body without the massageSystem attribute', () => {
            const bodyandParamValid = {
                body: {
                    name: "Caracteristica premium",
                    massageSystem: true,
                    shielding: false,
                    sunRoof: true,
                    automatic: false,
                    selfDriving: true,
                },
                params:{
                    id: "4aa5d43a-5808-4206-8093-f486d152ccb3"
                }
            }
            const bodyandParamValidParsed = updateFeatureSchema.safeParse(bodyandParamValid);
            expect(bodyandParamValidParsed.success).toBe(true)
        })
        it('Should pass a body without the shielding attribute', () => {
            const bodyandParamValid = {
                body: {
                    name: "Caracteristica premium",
                    massageSystem: true,
                    sunRoof: true,
                    automatic: false,
                    selfDriving: true,
                },
                params:{
                    id: "4aa5d43a-5808-4206-8093-f486d152ccb3"
                }
            }
            const bodyandParamValidParsed = updateFeatureSchema.safeParse(bodyandParamValid);
            expect(bodyandParamValidParsed.success).toBe(true)
        })
        it('Should pass a body without the sunRoof attribute', () => {
            const bodyandParamValid = {
                body: {
                    name: "Caracteristica premium",
                    massageSystem: true,
                    shielding: false,
                    automatic: false,
                    selfDriving: true,
                },
                params:{
                    id: "4aa5d43a-5808-4206-8093-f486d152ccb3"
                }
            }
            const bodyandParamValidParsed = updateFeatureSchema.safeParse(bodyandParamValid);
            expect(bodyandParamValidParsed.success).toBe(true)
        })
        it('Should pass a body without the automatic attribute', () => {
            const bodyandParamValid = {
                body: {
                    name: "Caracteristica premium",
                    massageSystem: true,
                    shielding: false,
                    sunRoof: true,
                    selfDriving: true,
                },
                params:{
                    id: "4aa5d43a-5808-4206-8093-f486d152ccb3"
                }
            }
            const bodyandParamValidParsed = updateFeatureSchema.safeParse(bodyandParamValid);
            expect(bodyandParamValidParsed.success).toBe(true)
        })
        it('Should pass a body without the selfDriving attribute', () => {
            const bodyandParamValid = {
                body: {
                    name: "Caracteristica premium",
                    massageSystem: true,
                    shielding: false,
                    sunRoof: true,
                    automatic: false,
                },
                params:{
                    id: "4aa5d43a-5808-4206-8093-f486d152ccb3"
                }
            }
            const bodyandParamValidParsed = updateFeatureSchema.safeParse(bodyandParamValid);
            expect(bodyandParamValidParsed.success).toBe(true)
        })
        describe('When an invalid body', () => {
            it('Should not pass a payload without param', () => {
                const bodyandParamValid = {
                    body: {
                        name: "Caracteristica premium",
                        massageSystem: true,
                        shielding: false,
                        sunRoof: true,
                        automatic: false,
                    }
                }
                const bodyandParamValidParsed = updateFeatureSchema.safeParse(bodyandParamValid);
                expect(bodyandParamValidParsed.success).toBe(false)
            })
            it('Should not pass a payload without param', () => {
                const bodyandParamValid = {
                    body: {
                        name: "Caracteristica premium",
                        massageSystem: true,
                        shielding: false,
                        sunRoof: true,
                        automatic: false,
                    }
                }
                const bodyandParamValidParsed = updateFeatureSchema.safeParse(bodyandParamValid);
                expect(bodyandParamValidParsed.success).toBe(false)
            })
        })
    })
})