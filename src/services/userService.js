const serverUrl = 'https://fe3b-178-122-190-194.ngrok-free.app'

const getUserByChatId = async chatId => {
	const response = await fetch(`${serverUrl}/api/users/${chatId}`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const getChatIdByUsername = async username => {
	const response = await fetch(`${serverUrl}/api/users/chat-id/${username}`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const getUserLanguage = async chatId => {
	const response = await fetch(`${serverUrl}/api/users/language/${chatId}`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	const data = await response.json()
	return data.languageCode
}

const updateUserBalanceAndEcha = async (chatId, amount, echaCoins) => {
	const response = await fetch(`${serverUrl}/api/users/update-balance`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ chatId, amount, echaCoins }),
	})

	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const updateUserBalanceAndDonated = async (chatId, amount) => {
	const response = await fetch(
		`${serverUrl}/api/users/update-balance-and-donated`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ chatId, amount }),
		}
	)

	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const startFarming = async chatId => {
	const response = await fetch(`${serverUrl}/api/users/start-farming`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ chatId }),
	})
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const getFarmingStatus = async chatId => {
	const response = await fetch(
		`${serverUrl}/api/users/farming-status/${chatId}`
	)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const updateEchaCoins = async (chatId, echaCoins) => {
	const response = await fetch(`${serverUrl}/api/users/update-echa`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ chatId, echaCoins }),
	})
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const getReferrals = async chatId => {
	const response = await fetch(`${serverUrl}/api/users/referrals/${chatId}`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const checkUserPremiumStatus = async username => {
	try {
		const response = await fetch(`/api/checkPremiumStatus?username=${username}`)
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json()
		return data.isPremium
	} catch (error) {
		console.error('Error checking premium status:', error)
		return false
	}
}

const getTopDonors = async () => {
	const response = await fetch(`${serverUrl}/api/users/top-donors`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

const getDonationsByUsername = async username => {
	const response = await fetch(`${serverUrl}/api/users/donations/${username}`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return await response.json()
}

export {
	checkUserPremiumStatus,
	getChatIdByUsername,
	getDonationsByUsername,
	getFarmingStatus,
	getReferrals,
	getTopDonors,
	getUserByChatId,
	getUserLanguage, // Добавлен экспорт getUserLanguage
	startFarming,
	updateEchaCoins,
	updateUserBalanceAndDonated,
	updateUserBalanceAndEcha,
}
