export const subscribeUser = async (userData) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Subscription failed');
      }
  
      return await response.json();
    } catch (error) {
      throw new Error(error.message || 'Network error occurred');
    }
  };