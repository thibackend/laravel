import { ApiService } from "../api.service"




export const SelectAllServices = () => {
    return ApiService.pso('/services')
}