import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

const PaginationExample = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    // Simulating API call delay
    setTimeout(() => {
      // Replace this with your API call to fetch data for the current page
      const newData = Array.from({ length: 10 }, (_, index) => ({
        id: (page - 1) * 10 + index + 1,
        name: `Item ${index + 1}`,
      }));

      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
    }, 1500);
  };

  const renderItem = ({ item }) => (
    <View>
      {/* Render your item */}
    </View>
  );

  const renderFooter = () => {
    if (!isLoading) return null;

    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const handleLoadMore = () => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
      fetchData();
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default PaginationExample;
