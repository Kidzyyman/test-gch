interface IUserGeo {
	lat: string
	lng: string
}

interface IUserAddress {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: IUserGeo
}

interface IUserCompany {
	name: string
	catchPhrase: string
	bs: string
}

export interface IUser {
	id: number
	name: string
	username: string
	email: string
	address: IUserAddress
	phone: string
	website: string
	company: IUserCompany
}

export type IUserStatus = 'idle' | 'loading' | 'success' | 'error'

/* -------------- services ---------------- */

export interface IFetchUsers {
	(limit?: number): Promise<IUser[]>
}
export interface IDeleteUser {
	(userId: number): Promise<void>
}
